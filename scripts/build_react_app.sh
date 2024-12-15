#!/bin/bash
cd /var/www/my-react-app
npm run build
serve -s build -l 3000 &
