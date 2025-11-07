#!/bin/sh

readonly APPS_DIR='/var/www/html/apps'
readonly PACKAGE_LIST_HASH_FILE_NAME="${1}-package.json.md5"

if [ ! -f ${APPS_DIR}/${PACKAGE_LIST_HASH_FILE_NAME} ]; then
    echo > ${APPS_DIR}/${PACKAGE_LIST_HASH_FILE_NAME}
fi

hash=`node -e "console.log(require('${APPS_DIR}/package-lock.json')['packages']['${1}/app'] ?? '')" | xargs -i echo {} | md5sum | awk '{print $1}' | tr -d '\n'`

diff <(echo `cat ${APPS_DIR}/${PACKAGE_LIST_HASH_FILE_NAME}`) <(echo ${hash})

if [ $? != 0 ]; then
    npm install -w $1
    echo ${hash} | tr -d '\n' > ${APPS_DIR}/${PACKAGE_LIST_HASH_FILE_NAME}
fi

sh -c "$2"
# exec "$2"