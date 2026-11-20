
using SSCafe.UserManagement.Application.DTOs;

using SSCafe.UserManagement.Application.Interfaces.Repositories;
using SSCafe.UserManagement.Domain.Entities;

namespace SSCafe.UserManagement.Application.Services
{
    public class UserRoleService
    {
        private readonly IUserRoleRepository _userRoleRepository;

        public UserRoleService(IUserRoleRepository userRoleRepository)
        {
            _userRoleRepository = userRoleRepository;
        }

        // Get roles assigned to a user
        public async Task<IEnumerable<UserRoleDto>> GetByUserIdAsync(int userId)
        {
            var userRoles =
                await _userRoleRepository.GetByUserIdAsync(userId);

            return userRoles.Select(ur => new UserRoleDto
            {
                Id = ur.Id,
                UserId = ur.UserId,
                RoleId = ur.RoleId
            });
        }

        // Assign role to user
        public async Task<UserRoleDto> AssignRoleAsync(UserRoleDto userRoleDto)
        {
            var userRole = new UserRole
            {
                UserId = userRoleDto.UserId,
                RoleId = userRoleDto.RoleId
            };

            await _userRoleRepository.AddAsync(userRole);
            await _userRoleRepository.SaveChangesAsync();

            return new UserRoleDto
            {
                Id = userRole.Id,
                UserId = userRole.UserId,
                RoleId = userRole.RoleId
            };
        }

        // Remove role from user
        public async Task<bool> RemoveRoleAsync(int id)
        {
            var userRoles =
                await _userRoleRepository.GetByUserIdAsync(0);

            var userRole = userRoles.FirstOrDefault(ur => ur.Id == id);

            if (userRole == null)
                return false;

            await _userRoleRepository.DeleteAsync(userRole);
            await _userRoleRepository.SaveChangesAsync();

            return true;
        }
    }
}
