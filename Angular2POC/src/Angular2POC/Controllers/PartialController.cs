﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2POC.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Message() => PartialView();

        public IActionResult Numbers() => PartialView();

        public IActionResult Cmpoc() => PartialView();

        public IActionResult packagelist() => PartialView();

        public IActionResult packagenew() => PartialView();

        public IActionResult packagedetail() => PartialView();
    }
}
