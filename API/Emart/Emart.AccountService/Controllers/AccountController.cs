using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Repositories;
using Emart.AccountService.Models;
using Microsoft.AspNetCore.Cors;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using OfficeOpenXml.FormulaParsing.LexicalAnalysis;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
   
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        private readonly IConfiguration configuration;
        public AccountController(IAccountRepository repo, IConfiguration _config)
        {
            _repo = repo;
            configuration = _config;
        }
        [HttpGet]
        [Route("Login/{uname}/{pwd}/{user}")]
        public IActionResult Login(string uname, string pwd, string user)
        {
            try
            {
                if (user == "Seller")
                {
                    Seller seller = _repo.LoginSeller(uname, pwd);
                    if (seller != null) {
                        Token token = new Token() { sellerId = seller.Id, token = GenerateJwtToken(uname), msg = "Success" };
                        return Ok(token);
                    }
                    else
                    {
                        Token token = new Token() { msg = "Unscuccess" };
                        return Ok(token);
                    }
                }
                else if (user == "Buyer")
                {
                    Buyer buyer = _repo.LoginBuyer(uname, pwd);
                    if (buyer != null)
                    {
                        Token token = new Token() { buyerId = buyer.Id, token = GenerateJwtToken(uname), msg = "Success" };
                        return Ok(token);
                    }
                    else
                    {
                        Token token = new Token() { msg = "Unsuccess" };
                        return Ok(token);

                    }
                }
                else
                {
                    Token token = new Token() { msg = "Unsuccess" };
                    return Ok(token);
                }
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSeller")]
        public IActionResult GetSeller()
        {
            return Ok(_repo.GetSeller());
        }
        [HttpGet]
        [Route("GetBuyer")]
        public IActionResult GetBuyer()
        {
            return Ok(_repo.GetBuyer());
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["Jwt:JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["Jwt:JwtIssuer"],
                configuration["Jwt:JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    
    }
}