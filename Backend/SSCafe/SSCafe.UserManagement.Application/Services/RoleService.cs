
using SSCafe.UserManagement.Application.DTOs;

using SSCafe.UserManagement.Application.Interfaces.Repositories;
using SSCafe.UserManagement.Domain.Entities;

namespace SSCafe.UserManagement.Application.Services
{
    public class RoleService
    {
        private readonly IRoleRepository _roleRepository;

        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        // Get role by ID
        public async Task<RoleDto?> GetByIdAsync(int id)
        {
            var role = await _roleRepository.GetByIdAsync(id);

            if (role == null)
                return null;

            return new RoleDto
            {
                Id = role.Id,
                Name = role.Name
            };
        }

        // Get all roles
        public async Task<IEnumerable<RoleDto>> GetAllAsync()
        {
            var roles = await _roleRepository.GetAllAsync();

            return roles.Select(role => new RoleDto
            {
                Id = role.Id,
                Name = role.Name
            });
        }

        // Create role
        public async Task<RoleDto> CreateAsync(RoleDto roleDto)
        {
            var role = new Role
            {
                Name = roleDto.Name
            };

            await _roleRepository.AddAsync(role);
            await _roleRepository.SaveChangesAsync();

            return new RoleDto
            {
                Id = role.Id,
                Name = role.Name
            };
        }

        // Update role
        public async Task<bool> UpdateAsync(RoleDto roleDto)
        {
            var role = await _roleRepository.GetByIdAsync(roleDto.Id);

            if (role == null)
                return false;

            role.Name = roleDto.Name;

            await _roleRepository.UpdateAsync(role);
            await _roleRepository.SaveChangesAsync();

            return true;
        }

        // Delete role
        public async Task<bool> DeleteAsync(int id)
        {
            var role = await _roleRepository.GetByIdAsync(id);

            if (role == null)
                return false;

            await _roleRepository.DeleteAsync(role);
            await _roleRepository.SaveChangesAsync();

            return true;
        }
    }
}
