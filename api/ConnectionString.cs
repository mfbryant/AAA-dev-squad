namespace api
{
    public class ConnectionString
    {
        public string cs { get; set; }

        public ConnectionString()
        {
            string server = "ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "xtmm4n3lnpdm6nue";
            string port = "3306";
            string userName = "zdm4fhkb0zyuy5gu";
            string password = "j2gciuz3hg9e177x";

            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}