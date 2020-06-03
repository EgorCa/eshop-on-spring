package com.example.eshop.Repositories;

import com.example.eshop.Models.Orders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface OrdersRepository extends CrudRepository<Orders, Long>{}
