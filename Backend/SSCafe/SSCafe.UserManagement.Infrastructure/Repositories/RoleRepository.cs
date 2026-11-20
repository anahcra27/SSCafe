
using Microsoft.EntityFrameworkCore;
using SSCafe.UserManagement.Application.Interfaces.Repositories;
using SSCafe.UserManagement.Domain.Entities;
using SSCafe.UserManagement.Infrastructure.Data;

namespace SSCafe.UserManagement.Infrastructure.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly UserManagementDbContext _context;

        public RoleRepository(UserManagementDbContext context)
        {
            _context = context;
        }

        public async Task<Role?> GetByIdAsync(int id)
        {
            return await _context.Roles.FindAsync(id);
        }

        public async Task<IEnumerable<Role>> GetAllAsync()
        {
            return await _context.Roles.ToListAsync();
        }

        public async Task AddAsync(Role role)
        {
            await _context.Roles.AddAsync(role);
        }

        public Task UpdateAsync(Role role)
        {
            _context.Roles.Update(role);
            return Task.CompletedTask;
        }

        public Task DeleteAsync(Role role)
        {
            _context.Roles.Remove(role);
            return Task.CompletedTask;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
