namespace api.models
{
    public class Event
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Location { get; set; }
        public string EventDeets { get; set; }
    }
}