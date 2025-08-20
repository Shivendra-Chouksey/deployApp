package com.shivendra.deployApp.config;

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
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}
