pipeline{
    agent any
    stages{
        stage('git repo & clean'){
            steps{
                // bat "rmdir /s /q TestApi"
                bat "git clone https://github.com/ahsantahseen/test-api.git"
                bat "mvn clean -f TestApi"
            }
        }
        stage('install'){
            steps{
                bat "mvn install -f TestApi"
            }
        }
        stage('test'){
            steps{
                bat "mvn test -f TestApi"
            }
        }
        stage('package'){
            steps{
                bat "mvn package -f TestApi"
            }
        }
    }
}