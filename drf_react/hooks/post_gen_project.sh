#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`


echo "${green}Installing all dependencies ...${reset}"
make setup

echo "${green}Creating .env file in repo from env.examle ...${reset}"
cp $PWD/docs/.env.example .env

