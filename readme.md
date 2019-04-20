# first
    1. php artisan preset react
    2. npm install && npm run dev
    3. npm install react-router-dom && npm install axios && npm install styled-components && npm install styled-reset && npm install react-js-pagination && npm install react-player

# .env
    DB_CONNECTION=mysql
    DB_HOST=laravel.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=blog
    DB_USERNAME=the2792
    DB_PASSWORD=canyou12

# AppServiceProvider.php
    <?php

    namespace App\Providers;

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Support\ServiceProvider;

    class AppServiceProvider extends ServiceProvider
    {
        public function register()
        {
            //
        }

        public function boot()
        {
            Schema::defaultStringLength(191);
        }
    }

# welcome.blade.php
     <body>
            <div id="example"></div>
            <script src="{{ asset('js/app.js') }}" defer></script>
    </body>


# 필요한 extension
    

# babel
    .babelrc 생성

    {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
    }

# package.json
    "devDependencies": {
        "@babel/plugin-proposal-class-properties": "^7.4.0",
        "@babel/preset-env": "^7.4.2",
        "@babel/preset-react": "^7.0.0",
        "axios": "^0.18.0",
        "babel-eslint": "^10.0.1",
        "babel-plugin-transform-class-properties": "^6.24.1",
        "babel-preset-env": "^1.7.0",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-1": "^6.24.1",
        "bootstrap": "^4.0.0",
        "cross-env": "^5.1",
        "jquery": "^3.2",
        "laravel-mix": "^4.0.7",
        "lodash": "^4.17.5",
        "popper.js": "^1.12",
        "prettier-eslint": "^8.8.2",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "resolve-url-loader": "^2.3.1",
        "sass": "^1.15.2",
        "sass-loader": "^7.1.0",
        "vue-template-compiler": "^2.6.10"
    },


# npm 관련
    Step 1: $ npm cache clean --force

    Step 2: delete node_modules by $ rm -rf node_modules folder or delete it manually by going into the directory and right-click > delete.

    Step 3: npm install

    To start again, $ npm start

    This worked for me. Hopes it works for you too.

    PS: Still if it is there, kindly check the error it displays in red and act accordingly. This error is specific to node.js environment. Happy Coding!!


# jsx에서 emmet 활성화 (vscode)
    cmd + ,

    "files.associations": {
    "*.js": "javascriptreact"
    }


# .eslintrc

    {
        "eslintConfig": {
            "extends": "airbnb",
            "rules": {
            "react/prefer-stateless-function": 0,
            "react/jsx-filename-extension": 0,
            "react/jsx-one-expression-per-line": 0
            },
            "env": {
            "browser": true
            }
        },
        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
            "jsx": true
            }
        },
        "rules": {
            "semi": "error"
        }
    }


# .prettierrc

    {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 80
    }


# view
    <!doctype html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title>Laravel</title>

            <!-- Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

            <meta name="csrf-token" content="{{ csrf_token() }}">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link rel="stylesheet" href="{{asset('css/style.css')}}">

        </head>
        <body>
                <div id="example"></div>
                <script src="{{ asset('js/app.js') }}" defer></script>
        </body>
    </html>
