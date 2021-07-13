namespace api
{
    public class ConnectionString
    {
        public string cs { get; set; }

        public ConnectionString()
        {
            string server = "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "m5xf9r3a28wp8b9v";
            string port = "3306";
            string userName = "ufdiw3159yetu83n";
            string password = "mpw4dlygo3poft9m";

            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}