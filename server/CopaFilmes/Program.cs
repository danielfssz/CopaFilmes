using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CopaFilmes {
    public class Program {
        public static void Main (string[] args) {
            // use this to allow command line parameters in the config
            var configuration = new ConfigurationBuilder ()
                .AddCommandLine (args)
                .Build ();

            var hostUrl = configuration["hosturl"];
            if (string.IsNullOrEmpty (hostUrl)) {
                hostUrl = "http://localhost:5001";
            }

            var host = new WebHostBuilder ()
                .UseKestrel ()
                .UseUrls (hostUrl) // <!-- this 
                .UseContentRoot (Directory.GetCurrentDirectory ())
                .UseIISIntegration ()
                .UseStartup<Startup> ()
                .UseConfiguration (configuration)
                .Build ();

            host.Run ();
        }

    }
}