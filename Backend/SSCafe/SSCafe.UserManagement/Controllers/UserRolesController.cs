
using Microsoft.AspNetCore.Mvc;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Services;

namespace SSCafe.UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
    {
        private readonly UserRoleService _userRoleService;

        public UserRolesController(UserRoleService userRoleService)
        {
            _userRoleService = userRoleService;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetByUserId(int userId)
        {
            var userRoles =
                await _userRoleService.GetByUserIdAsync(userId);

            return Ok(userRoles);
        }

        [HttpPost]
        public async Task<IActionResult> AssignRole(UserRoleDto userRole)
        {
            var result =
                await _userRoleService.AssignRoleAsync(userRole);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveRole(int id)
        {
            var result =
                await _userRoleService.RemoveRoleAsync(id);

            if (!result)
                return NotFound();

            return Ok("Role removed successfully");
        }
    }
}
