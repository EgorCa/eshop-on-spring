package com.example.eshop.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
//Данная модель создает таблицу в БД goods
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;//Уникальный идентификатор и аннотации к нему
    private String Name;//Название детали
    private  int cost;//Общая цена на детали

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    //Конструктор без параметров
    public Orders() {
    }
    //Конструктор на сборку заказа
    public Orders(String name, int cost) {
        this.Name = name;
        this.cost = cost;
    }
}
