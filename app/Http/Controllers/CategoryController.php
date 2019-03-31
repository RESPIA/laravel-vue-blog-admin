<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all();
        //return Category::latest()->paginate(5);
        
        // $category;
        return response()->json([
            'message' => 'list all category',
            'category' => $category
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'cate_name' => 'required|min:3|max:100'
        ]);

        $category = New Category();
        $category->cate_name = $request->input('cate_name');
        $category->save();
        return response()->json([
            'message' =>'category created success',
            'category' => $category
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json([
            'message' => 'list a category',
            'category' => $category
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return response()->json([
            'category'=>$category
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'cate_name'=>'required|min:2|max:50'
        ]);
        $category = Category::find($id);
        $category->cate_name = $request->cate_name;
        $category->save();
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        return response()->json([
            'message' => 'delete category successfully !',
            'category' => $category
        ]);
    }

    public function selected_category($ids){
        //var_dump($ids);
        //return $ids;
        $all_id = explode(',',$ids);
        foreach ($all_id as $id){
            $category = Category::find($id);
            $category->delete();
        }
     }
     
}
