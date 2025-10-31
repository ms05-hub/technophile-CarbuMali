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
<<<<<<< HEAD
                .csrf(csrf -> csrf.disable()) //  pour tester en local
=======
                .csrf(csrf -> csrf.disable()) // 🔸 désactive CSRF
>>>>>>> 1239ec5e6c07da1174dc6326bcc2ce1006385990
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
