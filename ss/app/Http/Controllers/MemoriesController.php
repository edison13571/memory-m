<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Memory;
use DB;
use Carbon\Carbon;

class MemoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $now=Carbon::now();
        $name = $request->name;
        $family = $request->family;
        $page = $request->page;
        $page =(int)$page;
        if ($name == null && $family == null) {
            $memories=DB::table('memories')->where('deleted_at','=',NULL)->where('recall_time','<=',$now)->get();
             }
        else {
            $memories=DB::table('memories')->where('deleted_at','=',NULL)->where('recall_time','<=',$now)->where('name', 'like', '%'.$name.'%')->where('family', 'like', '%'.$family.'%')->get();
        }
        $number=$memories->count();
        $memories = $memories->toArray();
        if($number > 10){
            $memories=array_slice($memories,0,$page*10);
        }
        return response()->json(['memories' => $memories,'number'=>$number]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $now=Carbon::now();
        $memories = Memory::create([
            'name'=> $request->name,
            'content'=> $request->content,
            'family'=> $request->family,
            'type'=> $request->type,
            'recall_time'=> $now
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
    public function update(Request $request)
    {
        $now=Carbon::now();
        $id = $request->id;
        $memories = Memory::findOrFail($id);
        $memories->update([
            'recall_style' =>'30Min',
            'recall_time'=> $now
          ]);
        return response()->json(['code' => '666','msg' => '重置成功成功！']);
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
        $memories = Memory::findOrFail($id);
        $memories->forceDelete();
        return response()->json(['code' => '666','msg' => '删除成功！']);
    }

    public function finish(Request $request)
    {
      $id = $request->id;
      $memories = Memory::findOrFail($id);
      $memories->delete();
      return response()->json(['code' => '666','msg' => '完成成功！']);
    }

    public function remeber(Request $request)
    {
        $id = $request->id;
        $memories = Memory::findOrFail($id);
        $memories->update([
            'recall_style' =>$request->recall_style,
            'recall_time'=> $request->recall_time
          ]);
        return response()->json(['code' => '666','msg' => '记忆成功！']);
    }
}
