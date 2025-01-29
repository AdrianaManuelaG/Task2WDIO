pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }

        stage('Check Code Format') {
            steps {
                script {
                    sh 'npm run check:format'  
                }
            }
        }

        stage('Run Linters') {
            steps {
                script {
                    sh 'npm run lint' 
                }
            }
        }

        stage('Run WebdriverIO Tests') {
            steps {
                script {
                    sh 'npm run wdio'  
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    sh 'npm run allure:generate'
                }
            }
        }

        stage('Open Allure Report') {
            steps {
                script {
                    sh 'npm run allure:open'
                }
            }
        }
    }

    post {
        always {
            script {
                archiveArtifacts artifacts: '**/allure-results/*', fingerprint: true
            }
        }
        failure {
            script {
                echo "Build failed!"
            }
        }
    }
}
