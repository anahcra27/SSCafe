using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Interfaces.Repositories
{
    public interface IUserRoleRepository
    {
        Task<IEnumerable<UserRole>> GetByUserIdAsync(int userId);

        Task AddAsync(UserRole userRole);

        Task DeleteAsync(UserRole userRole);

        Task SaveChangesAsync();
    }
}
