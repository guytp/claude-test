using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class WeatherForecastController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public WeatherForecastController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    [AllowAnonymous]
    public IActionResult Get()
    {
        var summaries = _configuration.GetSection("WeatherSettings:Summaries").Get<string[]>() ?? Array.Empty<string>();

        var forecast = Enumerable.Range(1, 5).Select(index =>
            new WeatherForecast
            (
                DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Random.Shared.Next(-20, 55),
                summaries.Length > 0 ? summaries[Random.Shared.Next(summaries.Length)] : null
            ))
            .ToArray();

        return Ok(forecast);
    }
}