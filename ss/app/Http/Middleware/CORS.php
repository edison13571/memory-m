<?php namespace App\Http\Middleware;

use Closure;
use Response;
class CORS {

  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {

    $response = $next($request);
        $response->header('Access-Control-Allow-Origin', 'http://localhost:9998');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, OPTIONS');
        $response->header('Access-Control-Allow-Credentials', 'true');
        return $response;
  }

}
