
using Microsoft.EntityFrameworkCore;
using SSCafe.UserManagement.Application.Interfaces.Repositories;
using SSCafe.UserManagement.Domain.Entities;
using SSCafe.UserManagement.Infrastructure.Data;

namespace SSCafe.UserManagement.Infrastructure.Repositories
{
    public class UserRoleRepository : IUserRoleRepository
    {
        private readonly UserManagementDbContext _context;

        public UserRoleRepository(UserManagementDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserRole>> GetByUserIdAsync(int userId)
        {
            return await _context.UserRoles
                .Where(ur => ur.UserId == userId)
                .ToListAsync();
        }

        public async Task AddAsync(UserRole userRole)
        {
            await _context.UserRoles.AddAsync(userRole);
        }

        public Task DeleteAsync(UserRole userRole)
        {
            _context.UserRoles.Remove(userRole);
            return Task.CompletedTask;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
