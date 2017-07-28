# Installing nodejs

## checking node
### >> unix environment
which npm
which node 

### >> dos environment
where npm
where node 

## exporting path
export PATH=/usr/local/bin:$PATH

## Running NodeJs Environment
node [file.name | optional]
CTRL + C for quit.

### write file (create a file with content)
echo "console.log('Hello NodeJS');" > file.js 

node file.js

## Command Prompt Basic
ls -al (-l list view | -a all files including hidden)

mkdir -p [folder name] (-p optional it will not complain if folder already exist)

cd [path/of/folder] (change directory)

touch [file.extension] (create an file)

rm -r [file.extension] (remove file | -r used if it is not empty) (-r means recusive path)

echo "some text" > file.txt (create file with content of "some text")

echo "add more text" >> file.txt (create or append text to the file)

cat file.txt (echo content of file)

mv file.txt config/file.txt (move copy of a file to another file with same content).
cp package.json bower.json (copy file into another file).
cp -r config cnf (copy folder to another folder | -r is used copy files of a folder)


## Client Server
1. No Dom Object.
2. Array.isArray(arr);.
3. Object.keys(obj);.
4. Object.keys(obj).forEach(function(key){});.
5. Node > globals
6. Node > process.argv
7. Node > __filename
8. Node > __dirname

## NPM
1. [Find Modules](https://www.npmjs.org)
2. lodash > npm install lodash
3. module.exports
