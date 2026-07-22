pipeline {
    agent any

    tools {
        sonarQube 'SonarScanner'
    }

    environment {
        SONAR_SCANNER_HOME = tool 'SonarScanner'
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Build Environment') {
            steps {
                sh '''
                    echo "===== Java ====="
                    java -version

                    echo "===== Git ====="
                    git --version

                    echo "===== Docker ====="
                    docker --version

                    echo "===== Node ====="
                    node -v

                    echo "===== NPM ====="
                    npm -v

                    echo "===== Python ====="
                    python3 --version

                    echo "===== Pip ====="
                    pip3 --version
                '''
            }
        }

        stage('Backend Dependencies') {
            steps {
                dir('backend') {
                    sh '''
                        python3 -m venv venv
                        . venv/bin/activate

                        pip install --upgrade pip
                        pip install -r requirements.txt

                        python manage.py check
                    '''
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh """
                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner
                    """
                }
            }
        }
    }

    post {

        success {
            echo '========================================='
            echo 'Pipeline completed successfully.'
            echo '========================================='
        }

        failure {
            echo '========================================='
            echo 'Pipeline failed.'
            echo '========================================='
        }

        always {
            cleanWs(deleteDirs: true)
        }
    }
}
