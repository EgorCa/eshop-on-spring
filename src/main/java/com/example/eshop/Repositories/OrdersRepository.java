package com.example.eshop.Repositories;

import com.example.eshop.Models.Orders;
import org.springframework.data.repository.CrudRepository;


public interface OrdersRepository extends CrudRepository<Orders, Long> {
}
