import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            const result = await axios.post('http://localhost:3001/login', {email, password});
            if(result.data === "Success") {
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setError('Identifiants incorrects');
            }
        } catch (err) {
            setError('Erreur de connexion');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="university-bg d-flex justify-content-center align-items-center min-vh-100">
            <div className="glass-card p-5" style={{ width: '100%', maxWidth: '450px' }}>
                <div className="text-center mb-4">
                    <img src="/logo-isimm.png" alt="University Logo" style={{ height: '70px' }} />
                    <h3 className="mt-3 text-darkblue">Connexion</h3>
                </div>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email Universitaire</label>
                        <input 
                            type="email" 
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="form-label">Mot de passe</label>
                        <input 
                            type="password" 
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn btn-blue w-100 py-2"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>
                
                <div className="mt-4 text-center">
                    <Link to="/register" className="text-darkblue hover-gold">
                        Créer un compte
                    </Link>
                    <span className="mx-2">•</span>
                    <Link to="/forgot-password" className="text-darkblue hover-gold">
                        Mot de passe oublié?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;