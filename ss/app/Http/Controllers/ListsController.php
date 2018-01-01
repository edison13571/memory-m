<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LisToDo;
use DB;

class ListsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lists = DB::table('lists')->orderBy('family')->where('deleted_at','=',NULL)->get();
        $number = $lists->count();
        return response()->json(['lists' => $lists,'number'=>$number]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $lists = LisToDo::create([
            'name'=> $request->name,
            'family'=> $request->family
          ]);
          return response()->json(['code' => '666','msg' => '创建成功！']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $lists = LisToDo::findOrFail($id);
        $lists->forceDelete();
        return response()->json(['code' => '666','msg' => '删除成功！']);
    }

    public function finish(Request $request)
    {
      $id = $request->id;
      $lists = LisToDo::findOrFail($id);
      $lists->delete();
      return response()->json(['code' => '666','msg' => '完成成功！']);
    }
}
