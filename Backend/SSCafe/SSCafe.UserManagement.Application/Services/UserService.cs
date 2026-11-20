
using SSCafe.UserManagement.Application.DTOs;

using SSCafe.UserManagement.Application.Interfaces.Repositories;
using SSCafe.UserManagement.Domain.Entities;
using System.Security.Cryptography;

namespace SSCafe.UserManagement.Application.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // Get user by ID
        public async Task<UserDto?> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            if (user == null)
                return null;

            return new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            };
        }

        // Get all users
        public async Task<IEnumerable<UserDto>> GetAllAsync()
        {
            var users = await _userRepository.GetAllAsync();

            return users.Select(user => new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            });
        }

        // Register new user
        public async Task<UserDto> RegisterAsync(
            string name, string email, string password)
        {
            var existingUser =
                await _userRepository.GetByEmailAsync(email);

            if (existingUser != null)
                throw new Exception("Email already registered.");

            byte[] salt = RandomNumberGenerator.GetBytes(16);

            byte[] hash = Rfc2898DeriveBytes.Pbkdf2(
                password,
                salt,
                210000,
                HashAlgorithmName.SHA256,
                32
            );

            var user = new User
            {
                Name = name,
                Email = email,
                PasswordHash = Convert.ToBase64String(salt)
                    + "." + Convert.ToBase64String(hash)
            };

            await _userRepository.AddAsync(user);
            await _userRepository.SaveChangesAsync();

            return new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            };
        }

        // Update user
        public async Task<bool> UpdateAsync(UserDto userDto)
        {
            var user = await _userRepository.GetByIdAsync(userDto.Id);

            if (user == null)
                return false;

            user.Name = userDto.Name;
            user.Email = userDto.Email;

            await _userRepository.UpdateAsync(user);
            await _userRepository.SaveChangesAsync();

            return true;
        }

        // Delete user
        public async Task<bool> DeleteAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);

            if (user == null)
                return false;

            await _userRepository.DeleteAsync(user);
            await _userRepository.SaveChangesAsync();

            return true;
        }
    }
}
