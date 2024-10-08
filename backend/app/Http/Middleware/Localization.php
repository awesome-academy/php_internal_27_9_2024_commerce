<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\App; // Thêm dòng này
use Illuminate\Support\Facades\Session;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->has("locale")) {
            $locale = $request->get("locale");
            App::setLocale($locale);
            Session::put("lang", $locale);
        } elseif (Session::has("lang")) {
            App::setLocale(Session::get("lang"));
        }

        return $next($request);
    }
}
