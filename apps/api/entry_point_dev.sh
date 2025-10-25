#!/bin/sh

readonly PACKAGE_LIST_FILE_NAME='package.json'
readonly PACKAGE_LIST_HASH_FILE_NAME='package.json.md5'

if [ ! -f ${PWD}/${PACKAGE_LIST_HASH_FILE_NAME} ]; then
    echo > ${PWD}/${PACKAGE_LIST_HASH_FILE_NAME}
fi

hash=`md5sum ${PWD}/${PACKAGE_LIST_FILE_NAME} | awk '{print $1}' | tr -d '\n'`

diff <(echo `cat ${PWD}/${PACKAGE_LIST_HASH_FILE_NAME}`) <(echo ${hash})

if [ $? != 0 ]; then
    npm ci
    echo ${hash} | tr -d '\n' > ${PWD}/${PACKAGE_LIST_HASH_FILE_NAME}
fi

npm run start:dev