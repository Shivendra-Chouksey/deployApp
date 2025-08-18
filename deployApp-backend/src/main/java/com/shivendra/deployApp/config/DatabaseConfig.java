// package com.shivendra.deployApp.config;

// import org.springframework.boot.jdbc.DataSourceBuilder;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import javax.sql.DataSource;

// @Configuration
// public class DatabaseConfig {
//     @Bean
//     public DataSource dataSource() {
//         return DataSourceBuilder.create()
//                 .driverClassName("org.postgresql.Driver")
//                 .url("jdbc:postgresql://localhost:5432/customerdb")
//                 .username(System.getenv("DB_USERNAME"))
//                 .password(System.getenv("DB_PASSWORD"))
//                 .build();
//     }
// }
