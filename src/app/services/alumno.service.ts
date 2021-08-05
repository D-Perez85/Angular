import {Injectable} from '@angular/core'; 
import {HttpClient, HttpHeaders} from '@angular/common/http'; //LIBRERIA Q TRAE EMBEBIDO EL SERVICIO HTTP
@Injectable()
export class AlumnoService {
   private urlAlumno = 'http://miapi.com:3002/api/modules/alumno'; 
    constructor(private http: HttpClient){}
    //TRAE TODOS LOS ALUMNOS
    getAlumnos(){

const header = {
			header: new HttpHeaders({
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk'
			})
		};
        return this.http.get('https://coding-challenge-api.aerolab.co/products', {headers:header.header}); 
    }
    //TRAE UN ALUMNO SEGUN ID
    getAlumno(idAlumno){
        
        return this.http.get(this.urlAlumno + 'alumno/' + idAlumno)
    }
    //GUARDA UN ALUMNO NUEVO
    guardarAlumno(alumno: any){
       return this.http.post(this.urlAlumno + 'alumno/', alumno)
    }
    //MODIFICA UN ALIMNO 
    modificarAlumno(alumno: any){
        return this.http.put(this.urlAlumno + 'alumno' + alumno.id, alumno)
    }
    //HEADER ES EL ENCABEZADO
    //BODY ES EL CONTENIDO DEL PAQUETE QUE VIAJA HACIA LA API
}

