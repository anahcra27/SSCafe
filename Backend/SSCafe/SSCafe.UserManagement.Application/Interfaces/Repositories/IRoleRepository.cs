using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Interfaces.Repositories
{
    public interface IRoleRepository
    {
        Task<Role?> GetByIdAsync(int id);

        Task<IEnumerable<Role>> GetAllAsync();

        Task AddAsync(Role role);

        Task UpdateAsync(Role role);

        Task DeleteAsync(Role role);

        Task SaveChangesAsync();
    }
}
