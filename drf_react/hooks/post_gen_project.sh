#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
echo "${green}Installing all dependencies ...${reset}"
make setup
echo "${green}Creating .env file in repo from env.examle ...${reset}"
cp $PWD/docs/.env.example .env
echo "${green}Start dev dependencies.${reset}"
make dev
echo "${green}Prepare database ${reset}"
make db && make be_init
echo "${green}Opening IDE${reset}"
code .

