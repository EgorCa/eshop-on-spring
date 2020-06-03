package com.example.eshop.Controllers;
import com.example.eshop.Models.Orders;
import com.example.eshop.Repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @Autowired
    private OrdersRepository ordersRepository;

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
    //Объект на основе нашего класса
    @PostMapping("/box")
    public String addtoDB(@RequestParam String name, @RequestParam int cost, Model model){
        Orders order = new Orders(name, cost);
        ordersRepository.save(order);
        return "";
    }
}