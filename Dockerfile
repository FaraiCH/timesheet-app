# Use the official Ubuntu base image
FROM ubuntu:latest

# Install necessary packages and add the ondrej/php PPA
RUN apt-get update && apt-get install -y \
    software-properties-common \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update && apt-get install -y \
    apache2 \
    php8.2 \
    php8.2-mysql \
    php8.2-xml \
    php8.2-mbstring \
    php8.2-curl \
    curl \
    git \
    unzip \
    nano \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set up the document root
WORKDIR /var/www/html

# Create the Apache configuration file
RUN echo "<VirtualHost *:80>\n\
    ServerAdmin webmaster@timesheet.co.za\n\
    ServerName i.timesheet.co.za\n\
    DocumentRoot /var/www/html/public\n\
    <Directory /var/www/html/public>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
    ErrorLog \${APACHE_LOG_DIR}/error.log\n\
    CustomLog \${APACHE_LOG_DIR}/access.log combined\n\
</VirtualHost>" > /etc/apache2/sites-available/timesheet.conf

# Enable Apache modules and site
RUN a2enmod rewrite
RUN a2dissite 000-default.conf
RUN a2ensite timesheet.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apachectl", "-D", "FOREGROUND"]
