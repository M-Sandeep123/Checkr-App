package com.checkr.apigateway.filter;

import com.checkr.apigateway.exception.UnauthorizedAccessException;
import com.checkr.apigateway.util.Constants;
import com.checkr.apigateway.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new UnauthorizedAccessException(Constants.HEADER_MISSING_MESSAGE);
                }
                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith(Constants.BEARER)) {
                    authHeader = authHeader.substring(7);
                }
                try {
                    jwtUtil.validateToken(authHeader);
                } catch (Exception e) {
                    log.error("invalid access...!");
                    throw new UnauthorizedAccessException("Missing authorization header");
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {}
}