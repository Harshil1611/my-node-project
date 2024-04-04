pipeline {
    agent {
        docker {
           image 'node:latest'
           args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                git 'repository id'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm deploy'
            }
        }
    post {
        failure {
            script {
                notifyTeams('Pipeline failed!')
            }
        }
    }
    }
}

def notifyTeams(message) {
    def teamsUrl = ''
    def payload = "{\"text\": \"${message}\"}"
    sh "curl -X POST -d '${payload}' '${teamsUrl}'"}