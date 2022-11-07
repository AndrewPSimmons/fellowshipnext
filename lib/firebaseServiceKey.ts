import { ServiceAccount } from "firebase-admin"
import { AppOptions } from "firebase-admin"

const key = {
  "type": "service_account",
  "project_id": "fellowship-backend",
  "private_key_id": "34f2abde224ea229a3abb4e02f57e1ba17402601",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCQIfqZIZ5NLRd7\nQ2bvy4e32iRSeS3l8PfJBfzuo5oPQ4zi9O4C0d0V0OxedA9BtQ7KBWewLRrdhO4q\nRYYMacE59P8/0NoeJbbdNVrJ20Y/SJLSBFKRazlfeSzkY5ycg1prfUh9P1eTkdMc\nCANTzut2PQ2Wk5NfFyFNtlx/MoXm7uRl04V2E/RrqGgVs4ZcZNhCwHIaFP2eL4Yn\naVhTs8aQ9H0EiGQECssZdvr9Q7fEOcfRIyq0j7xkKyi96pKWVXFhzVKbe9t4MhnB\nu4souExVnxEAcdj2RKoLfTraz9BFxYNiVMUeLI3R3D7fcVVJNxEo4xubcVdyYq1x\nxApdtL4/AgMBAAECggEARFzhfDVOXMOo8g2nqtAqGMFuXfHdG8W9+UqOS/AsN9Yt\n4k4TACJjTyAvpKM+w0cp8xc6NX1HU09kGYetS4DzpdY3JSEd+5Oe1vAiFkEbYhO9\nk8B6G0A0z7xtVwyKMVA6GGatdb6P/s35SD/iuCMaWpQduFBZ443YfYAkAi7IBR6O\nw0tTCEKuBPFcV5LrV+YhEu+XTzfQEgHsC2wJSjzIzx1N1h+bJ6oKW01WuGQWfzuU\nS5NJpi6Q9g1YKE70SgQAAdzjcdNHnoJGW1o6JEGBJZGPXNjqEwIFH7CJL661TmcG\nyoQ2HP0hymuwd1J3vM66AedK88weww7YFzYNip2cQQKBgQDGlwTvFQREMJyOmb4o\nbIQ0QxUiUYM6+4c7CmrfEFOTg5fkKkqXZDxTWDjpUzkFu+Yopd89aSBozt1MEA2R\nQC3A+VE6XB3XgLgF4xQwhhNwPHlDTwH7EQtG8UweyHcLv6hmfv0j2yv46jfriM/G\n4BF4qZx1xGDL6NCLT1eeYqWpwQKBgQC5zMOKb9JmmFHao0LDBs5BPJYwfE+JC5Ir\nAgvjRAJiDb5lOmexDJbS3NahJbjCnc1tIM0icpTCo7fT9eMPzGyhFj+1agzz6cHY\nCGdLGVauC0gDyh3pIz3f25mPEm8goU4Te42NMrfrrt+77S/ZzBs3WldDrMhKFmUW\nYK8AJGRn/wKBgQCkrdMPl3QEP/NzZRaFWwd+dyptXP7fyHjpgsgA1f8YUoWAVXmp\ndRt5Wa1H/xVIJfrENlibCjQv9WsZii5WBsxqO9UZ+g1dCYaQiy/Q1T4FUoCUSk4w\nLoAVgj9HP6FIgtRYunGcbEFYlpFspfT2zBRw5OWz2vcR4Kwe+dqEovURgQKBgAea\ng54UuW2NajwiVkcY7jPpQNQ3IiIfoRm1ebsRO2+71EDcRQYP19RFSVtK6ea9An0m\nzH5OZhwZCxrXgzVQTlnBSVYpQuJwfIhUv7VpEg0JVScijFrQIGYa3IvoWzfgogtW\nERLoMnKos2tDZ6PoIG0Be3S/i2rMw9JInqDI3HsNAoGANM7AR896iB+pFNe2zv4K\nTwgymf3zhhXu3p4vSDZM0ntvh3YUbPW7cBk/qa5Q7qZKUT1iidR52hXiEKpbd5xu\nqEbjqEVhUKTBvBvM0j1ZwVM5nmDU+4J5V01rzCnce8HSgRUFbwamk4fy2kKcvI7X\nYye9ufoyB6StLhTOE8kpMsc=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-wdi6a@fellowship-backend.iam.gserviceaccount.com",
  "client_id": "100230762606282487639",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wdi6a%40fellowship-backend.iam.gserviceaccount.com"
}

export default key