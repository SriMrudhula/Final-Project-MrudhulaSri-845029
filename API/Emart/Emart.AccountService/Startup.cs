using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Emart.AccountService.Repositories;
using Emart.AccountService.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Emart.AccountService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EmartContext>();
            services.AddTransient<IAccountRepository, AccountRepository>();
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options =>
                 options.AllowAnyOrigin()
                         .AllowAnyMethod()
                         .AllowAnyHeader()
                         );

            });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
      {
          options.TokenValidationParameters = new TokenValidationParameters(){
                    ValidateIssuer = true,  
                    ValidateAudience = true,  
                    ValidateLifetime = true,  
                    ValidateIssuerSigningKey = true,  
                    ValidIssuer = Configuration["Jwt:JwtIssuer"],  
                    ValidAudience = Configuration["Jwt:JwtIssuer"],  
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:JwtKey"]))
         };
           });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();
            app.UseAuthentication();
            app.UseCors("AllowOrigin");
           
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
