


namespace SSCafe.UserManagement.Domain.Entities
{
    public class Role
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        // Navigation Property
        public ICollection<UserRole> UserRoles { get; set; }
            = new List<UserRole>();
    }
}
