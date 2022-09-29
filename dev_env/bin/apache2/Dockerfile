FROM php:7.4.2-apache-buster

ARG DEBIAN_FRONTEND=noninteractive

# Update
RUN apt-get -y update --fix-missing && \
    apt-get upgrade -y && \
    apt-get --no-install-recommends install -y apt-utils && \
    rm -rf /var/lib/apt/lists/*


# Install useful tools and install important libaries
RUN apt-get -y update && \
    apt-get -y --no-install-recommends install nano wget \
        dialog \
        build-essential \
        git \
        curl \
        vim \
        zip && \
    rm -rf /var/lib/apt/lists/*

# Enable apache modules
RUN a2enmod rewrite headers