pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository cloned successfully.'
            }
        }

        stage('Workspace Information') {
            steps {
                sh 'pwd'
            }
        }

        stage('Project Structure') {
            steps {
                sh 'ls -la'
                sh 'find . -maxdepth 2'
            }
        }

        stage('Verify Docker') {
            steps {
                sh 'docker --version'
            }
        }

    }

    post {

        success {
            echo 'Pipeline executed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }

        always {
            echo 'Pipeline finished.'
        }
    }
}
