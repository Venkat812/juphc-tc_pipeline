FROM nginx:alpine

# Copy application files
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

