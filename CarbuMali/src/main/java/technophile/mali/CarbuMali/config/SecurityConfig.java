package technophile.mali.CarbuMali.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http

                .csrf(csrf -> csrf.disable()) // 🔸 désactive CSRF

                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // 🔓 autorise toutes les requêtes
                );
        return http.build();
    }

    // 🔑 Ajoute ce bean pour résoudre l'erreur "No qualifying bean of type PasswordEncoder"
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
