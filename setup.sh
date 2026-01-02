#!/usr/bin/env bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

echo "🚀 Setting up shared-schedule-app environment..."

githooksSetup() {
    cp -a ${1}/* ${2}/hooks/
    chmod +x ${2}/hooks/*
}

infraSetup() {
    cp -n ${1}/.env.example ${1}/.env 
    # cp -n ${1}/terraform.tfvars.example ${1}/src/envs/*/terraform.tfvars
    for dir in $(ls -d ${1}/src/envs/*/); do
        cp -n ${1}/terraform.tfvars.example ${dir}/terraform.tfvars
    done
}

readonly SCRIPT_DIR=$(dirname "$(realpath "$0")")
readonly GIT_DIR=${SCRIPT_DIR}/.git
readonly GIT_HOOKS_SCRIPT_DIR=${SCRIPT_DIR}/.githooks
readonly INFRA_DIR=${SCRIPT_DIR}/infra

githooksSetup "${GIT_HOOKS_SCRIPT_DIR}" "${GIT_DIR}"
infraSetup "${INFRA_DIR}"

echo "✅ shared-schedule-app environment setup complete."
exit 0