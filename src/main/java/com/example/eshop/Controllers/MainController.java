package com.example.eshop.Controllers;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/")
    public String eshop( Model model) {
        model.addAttribute("title", "Интернет магазин");
        return "eshop";
    }

    @GetMapping("/box")
    public String box( Model model) {
        model.addAttribute("title", "Корзина");
        return "box";
    }

}