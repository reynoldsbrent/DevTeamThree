using System.Text.Json;
using System.Text.Json.Serialization;

namespace api.JsonConverters
{
    public class AuthorsJsonConverter: JsonConverter<List<string>>
    {
        public override List<string> Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var authors = new List<string>();

            if (reader.TokenType == JsonTokenType.Null)
                return authors;

            if (reader.TokenType == JsonTokenType.String)
            {
                // Single author as string
                authors.Add(reader.GetString());
                return authors;
            }

            if (reader.TokenType == JsonTokenType.StartArray)
            {
                while (reader.Read())
                {
                    if (reader.TokenType == JsonTokenType.EndArray)
                        break;

                    if (reader.TokenType == JsonTokenType.String)
                        authors.Add(reader.GetString());
                }
            }

            return authors;
        }

        public override void Write(Utf8JsonWriter writer, List<string> value, JsonSerializerOptions options)
        {
            if (value == null || !value.Any())
            {
                writer.WriteNullValue();
                return;
            }

            writer.WriteStartArray();
            foreach (var author in value)
            {
                writer.WriteStringValue(author);
            }
            writer.WriteEndArray();
        }
    }
}
